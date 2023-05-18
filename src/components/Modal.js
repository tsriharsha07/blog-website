import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Dialog,
    IconButton,

} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import axios from 'axios';


const Modal = () => {
    const params = useParams()
    const [data1, setData] = useState({})
    const slug = params.id;
    const getData = async () => {
        const { data } = await axios.get(`https://api.theinnerhour.com/v1/blogdetail/${slug}`);
        setData(data.blog)
        console.log(data1);
        console.log(data);
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
                <Box sx={{ ml: "auto" }}>
                    <IconButton LinkComponent={Link} to="/">
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <div className='scroll-m-5 overflow-auto'>
                    <img src={data1.thumb} alt="" className='h-60 ml-2 w-full' />
                    <h1 className='text-2xl font-semibold ml-3'>{data1.title}</h1>
                    <p className='m-4'>{data1.body}</p>
                </div>

            </Dialog>
        </>
    );
}

export default Modal;
