import {useState} from 'react';
import {X} from "lucide-react";
import type {SubmitEvent} from "react";
import type {NewPost, Reactions} from "../types/post";

interface NewPostFormProps {
    onClose: () => void;
    onSubmit: (post: { body: string; userId: number; reactions: Reactions }) => void | Promise<void>;
}

export function NewPostForm({onClose, onSubmit}: NewPostFormProps) {
    const [body, setBody] = useState("");

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!body.trim()) return;

        await onSubmit({
            body: body.trim(),
            userId: 1,
            reactions: {likes: 0}
        });
        onClose();
    };
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex justify-center bg-black/70 pt-16">
            <form
                onClick={(event) => event.stopPropagation()}
                onSubmit={handleSubmit}
                className="w-full max-w-xl h-fit bg-black rounded-2xl text-white border border-gray-800">
                <div className="flex items-center justify-between border-b border-gray-800 p-4">
                    <button
                        type="button"
                        onClick={(e) => {e.stopPropagation(); onClose}}
                        className="p-2 rounded-full hover:bg-gray-900 cursor-pointer hover:scale-110">
                        <X size={20}/>
                    </button>
                    <button
                        type="submit"
                        onClick={(e) => {e.stopPropagation()}}
                        disabled={!body.trim()}
                        className="rounded-full bg-white px-5 py-2 font-bold text-black disabled:opacity-50 cursor-pointer hover:scale-105" >
                        Post
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    <textarea
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                        placeholder="What is happening?"
                        rows={6}
                        className="resize-none bg-transparent outline-none text-grey placeholder:text-gray-500"/>
                </div>
            </form>
        </div>
    );
}
export default NewPostForm;
