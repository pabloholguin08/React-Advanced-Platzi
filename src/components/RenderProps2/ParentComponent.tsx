import { useState } from "react";
interface ParentComponentProps {
    render: (name: string[]) => React.ReactNode;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(["Bleach", "Naruto", "One Piece"]);
    return (
        <ul>
            {render(data)}
        </ul>
    );
};

export default ParentComponent;
