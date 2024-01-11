import React, { useState, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import myContext from '../../../context/data/myContext';
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Typography,
} from "@material-tailwind/react";

import {Timestamp, addDoc, collection, snapshotEqual} from 'firebase/firestore';
import toast from 'react-hot-toast';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {fireDB, storage} from '../../../firebase/firebaseConfig'


function CreateBlog() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
        time: Timestamp.now(),

    });


    const [thumbnail, setthumbnail] = useState();

    const addPost= async()=>{
        if(blogs.title ==="" || blogs.category===""|| blogs.content ===""|| blogs.thumbnail===""){
            toast.error("Please fill all the fields")
        }
        uploadImage()
    }  

    const uploadImage = () => {
        if (!thumbnail) return;
        const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
        uploadBytes(imageRef, thumbnail).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const productRef = collection(fireDB, "blogPost")
                try {
                    addDoc(productRef, {
                        blogs,
                        thumbnail: url,
                        time: Timestamp.now(),
                        date: new Date().toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        )
                    })
                    navigate('/adminDashboard')
                    toast.success('Post Added Successfully');


                } catch (error) {
                    toast.error(error)
                    console.log(error)
                }
            });
        });
    }

    const [text, settext] = useState('');
    console.log("Value: ",);
    console.log("text: ", text);

    // Create markup function 
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className=' container mx-auto max-w-5xl py-6'>
            <div className="p-5" >
                {/* Top Item  */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        {/* Dashboard Link  */}
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>

                        {/* Text  */}
                        <Typography
                            variant="h4"
                            
                        >
                            Create blog
                        </Typography>
                    </div>
                </div>

                {/* main Content  */}
                <div className="mb-3">
                    {/* Thumbnail  */}
                    {thumbnail && <img className=" w-full rounded-md mb-3 "
                        src={thumbnail
                            ? URL.createObjectURL(thumbnail)
                            : ""}
                        alt="thumbnail"
                    />}

                    {/* Text  */}
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-semibold"
                        
                    >
                        Upload Thumbnail
                    </Typography>

                    {/* First Thumbnail Input  */}
                    <input
                        type="file"
                        label="Upload thumbnail"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
                        
                        onChange={(e) => setthumbnail(e.target.files[0])}
                    />
                </div>

                {/* Second Title Input */}
                <div className="mb-3">
                    <input
                        label="Enter your Title"
                       className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${mode === 'dark'
                 ? 'placeholder-black'
                 : 'placeholder-black'}`}
                        placeholder="Enter Your Title"
                        
                        name="title"
                    />
                </div>

                {/* Third Category Input  */}
                <div className="mb-3">
                    <input
                        label="Enter your Category"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${mode === 'dark'
                 ? 'placeholder-black'
                 : 'placeholder-black'}`}
                        placeholder="Enter Your Category"
                        
                        name="category"

                        onChange={(e)=> setBlogs({...blogs, category: e.target.value})}
                        value={blogs.category}
                    />
                </div>

                {/* Four Editor  */}
                <Editor
                    apiKey='e1ezlu3137r9j3yokfh3rwvoxbn3t587ykk373c2tne2g0bp'
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ blogs, content: newValue });
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    onInit={(evt, editor) => {
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount'
                    }}
                />

                {/* Five Submit Button  */}
                <Button className=" w-full mt-5"
                   onClick={addPost}
                >
                    Send
                </Button>

                {/* Six Preview Section  */}
                <div className="">
                    <h1 className=" text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                    <div
                        className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}

                        [&>ul]:list-disc [&>ul]:mb-2
                        ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}

                        [&>ol]:list-decimal [&>li]:mb-10
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                        [&>li]:list-decimal [&>ol]:mb-2
                        ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                        [&>img]:rounded-lg
                        `}
                         dangerouslySetInnerHTML={createMarkup(blogs.content)}>
                    </div>
            </div>
        </div >
            </div >
        </div >
    )
}

export default CreateBlog


// e1ezlu3137r9j3yokfh3rwvoxbn3t587ykk373c2tne2g0bp


// <!-- Place the first <script> tag in your HTML's <head> -->
// <script src="https://cdn.tiny.cloud/1/e1ezlu3137r9j3yokfh3rwvoxbn3t587ykk373c2tne2g0bp/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>

// <!-- Place the following <script> and <textarea> tags your HTML's <body> -->
// <script>
//   tinymce.init({
//     selector: 'textarea',
//     plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
//     toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//     tinycomments_mode: 'embedded',
//     tinycomments_author: 'Author name',
//     mergetags_list: [
//       { value: 'First.Name', title: 'First Name' },
//       { value: 'Email', title: 'Email' },
//     ],
//     ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
//   });
// </script>
// <textarea>
//   Welcome to TinyMCE!
// </textarea>