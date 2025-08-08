import { useState, type FC, type KeyboardEvent } from "react";

const TagInput: FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const trimmed = inputValue.trim();
            if (trimmed && !tags.includes(trimmed)) {
                setTags([...tags, trimmed]);
                setInputValue("");
            }
        }
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter(t => t !== tag));
    };

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="border px-4 rounded-full hover:bg-gray-200">
                        {tag} <button className="cursor-pointer ml-2" onClick={() => removeTag(tag)}>X</button>
                    </span>
                ))}
            </div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Input your tag here"
                className="border p-2 rounded mt-5"
            />
        </div>
    );
};

export default TagInput;