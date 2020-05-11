import React from 'react'

const CreatePost = ()=>{
    return(
        <div className="Card input-filled"
         style={{margin:"30px auto",maxWidth:"500px",
                padding:"20px",textAlign:"center"}}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue lighten-2">
                    <span>Uoload Image</span>
                    <input type="file" multiple/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                </div>
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                    Submit Post
                </button>
            </div>
        </div>
    )
}

export default CreatePost