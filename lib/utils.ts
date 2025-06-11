export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export async function isLoggedIn() {
    return false;
}