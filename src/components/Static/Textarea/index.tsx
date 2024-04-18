import { FC} from "react";
import styled from "styled-components";

interface TextareaComponent {
    id?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    onInputChange?:(e: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement>|any)=>void
}

const TextareaComponent: FC<TextareaComponent> = ({ placeholder , id , value , name  ,onInputChange}) => {


    
    return (
        <>
            <Textarea
                id={id}
                name={name}
                value={value} 
                placeholder={placeholder}
                onChange={onInputChange}
            />
        </>
    )
}

export default TextareaComponent;

const Textarea = styled.textarea`
    background-color: #d8d9db;
    color: rgb(24,24,24);
    border: 0;
    border-radius: 8px;
    height: 56px;
    padding: 20px 0px 20px 16px;
    width: 100%;
    outline: none;
    max-width: 608px;
    min-height: 120px;
`