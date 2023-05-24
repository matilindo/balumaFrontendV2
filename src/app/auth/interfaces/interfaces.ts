

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    username?:string;
    password?:string;
    token?: string;
    msg?: string;
    numeroFuncionario?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    email: string;
    password: string;
    username: string;
    numeroFuncionario: string;
}