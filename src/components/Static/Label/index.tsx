import styled from "styled-components"

interface LabelTypes {
    value: string,
    forId: string
}

const Label = ({ value , forId }:LabelTypes) => {
    return (
        <CustomLabel htmlFor={forId}>
            {
                value
            }
        </CustomLabel>
    )
}

export default Label

const CustomLabel = styled.label`
    color: #fff;
`