import { toast } from "react-toastify";

export function toast_error(message) {
    toast(message, {
        style: {
            backgroundColor: "red",
            color: "white"
        }
    });
}

export function toast_success(message) {
    toast(message, {
        style: {
            backgroundColor: "green",
            color: "white"
        }
    });
}
