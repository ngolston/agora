import React from "react";
import { useContext } from "react";
import PostFormModalCon from "./PostFormModalCon";

export default function PostForm() {
    const modalCon = useContext(PostFormModalCon);
    return (
        <div>

            <div >
                <div >
                </div>
                <form action="" >
                    <input type="text"
                        onFocus={e => {
                            e.preventDefault();
                            modalCon.setShow(true);
                        }}
                        placeholder="New post" />
                </form>
            </div>

        </div>
    );
}

