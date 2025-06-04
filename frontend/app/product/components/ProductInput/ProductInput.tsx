import * as React from 'react';

interface Props {
    label: string;
    onChange: (text: string) => void;
    type: 'numeric' | 'text';
    defaultValue: string | number;
}

export const ProductInput: React.FC<Props> = ({
    label,
    onChange,
    type
}) => {
    return null;
}
