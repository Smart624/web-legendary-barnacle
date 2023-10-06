import { Button as ChakraButton } from "@chakra-ui/react";

interface Props {
    type: 'button' | 'submit' | 'reset';
    label: string;
}

function Button({ type, label }: Props) {
    return (
        <ChakraButton type={type} colorScheme="blue">
            {label}
        </ChakraButton>
    );
}

export default Button;
