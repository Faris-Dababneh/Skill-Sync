/*HELP FROM https://www.youtube.com/watch?v=KNSvQ6Wbp7U*/

import React from "react";
import {motion} from 'framer-motion';

function ProgressBar(props)
{
    return (
        <div className="">
            <div className="w-[10rem] h-[5px] flex flex-row justify-start content-stretch bg-[#494b52] rounded-3xl shadow-[0_0_1px_#111] overflow-hidden">
                <motion.div 
                className="w-0 bg-white"
                animate={{
                    width: '100%'
                }} 
                transition={{
                    duration: props.time
                }}
                />
                
            </div>
        </div>
    );
}

export default ProgressBar;