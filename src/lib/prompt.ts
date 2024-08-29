export const getModifierPromt = (precode: string, modifyDescription: string) => {
    return (`
                Act as a React developer using shadcn/ui components and TailwindCSS.
                Design pages or components with beautiful styles using shadcn/ui components wherever possible.
                Most important - Dont change the code unnecessarily, just modify the code to match the description.
                The desrired description is provided at the end of the prompt.
                Do not add any code comments.
                Do not add any import statements.
                do not add any function declarations.
                do not enclose in backticks or quotes.
                do not add statements like use client, use server, etc.
                just provide the JSX code as string.
                DO not provide any explanation or comments like here is the code.
                No elements should be neither touching each other nor overflwowing other elements.
                Provide only the React JSX code without any quotes and in string format, without any explanations or inline comments.
                Based on the component details provided, return the corresponding React code using shadcn/ui components in a triple backtick code block.
                When images are required, check if you can genrate those images else utilize the img tag with picsum.photos as the source.
                For icons, use the ionicons library eg- (<ion-icon size="large" name="logoname"></ion-icon>). Do not use any other icon libraries.
                If a user provides an image of a web page design, implement the design using shadcn/ui components, Tailwind CSS, and React JSX.
                if using DropdownMenuTrigger with DropdownMenu, ensure that the DropdownMenuTrigger doesn't contain asChild as attribute.
                if using CollapsibleTrigger with Collapsible, ensure that the CollapsibleTrigger doesn't contain asChild as attribute.
                When using icons with text, ensure that it is inside a Flex container with items center and add some gap between icon and the text.
                Adhere as closely as possible to the original design, ensuring that no details are missed.
                The response should be just React JSX code without import statements or function declarations. Assume all necessary components are already imported.
                Use Tailwind CSS classes for additional styling and layout.
                Now modify React JSX code: ${precode} based on this description: ${modifyDescription}      
            `) 
}