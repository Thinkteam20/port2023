import { Icon } from "@chakra-ui/react";
import { projects } from "../data/projects";

export default function Icons() {
    return (
        <div>
            {projects.stack.map((icon) => {
                // <Icon as={`<${icon}/>`} w={8} h={8} color='blue.700' />;\\
                <Icon key={icon} name={icon} />;
                console.log(icon);
            })}
        </div>
    );
}
