import { FC } from 'react';
import styled from 'styled-components';

interface CardTypes {
    technology: string;
    documentation: string;
    logo: string;
}

const TechnologoyCard: FC<{ data: CardTypes }> = ({ data }) => {
    return (
        <div>
            <TechonologyCardLogo
                src={data.logo}
                alt={data.technology}
                onClick={() => window.open(data.documentation, "_blank")}
            />
        </div>
    )
}

export default TechnologoyCard;

const TechonologyCardLogo = styled.img`
    width: 120px;
    height: 120px;
    cursor: pointer;
`;