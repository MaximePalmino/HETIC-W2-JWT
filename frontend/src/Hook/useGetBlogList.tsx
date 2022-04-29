import {BlogInterface} from "../Interface/ResponsesInterfaces";
import axios from "axios";

export default function useGetBlogList() {
    return (): Promise<BlogInterface[]> => {
        return fetch('http://localhost:2345')
            .then(res => res.json())
    }
}
