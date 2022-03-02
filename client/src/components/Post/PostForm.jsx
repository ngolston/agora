import React from "react";
import { useContext } from "react";
import PostFormModal from "./PostFormModal";

export default function PostForm() {
    const modalContext = useContext(PostFormModal);
    return (
        <div className="">

            <div className="">
                <div className="">
                </div>
                <form action="" className="">
                    <input type="text"
                        onFocus={e => {
                            e.preventDefault();
                            modalContext.setShow(true);
                        }}
                        className="" placeholder="New post" />
                </form>
            </div>

        </div>
    );
}

