import Credentials from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next";
import { pages } from 'next/dist/build/templates/app-page';

/* https://next-auth.js.org/configuration/providers/credentials */
export default NextAuth({
    providers: [ Credentials({
        name: 'MeuBlog',
        credentials: {
            username: {
                label: 'Nome de usuário',
                type: 'text',
                placeholder: 'Digite seu nome de usuário'
            },
            password: {
                label: 'Senha',
                type: 'password',
                placeholder: 'Digite sua senha'
            }
        },
        async authorize(credentials, req) {

            if (credentials &&
                credentials.username == 'admin' &&
                credentials.password == 'admin') {
                return {
                    id: 1,
                    name: 'Admin',
                    email: 'admin@admin.com',
                    image: 'https://github.com/MatheusSGomes.png'
                }
            }

            return null;
        }
    }) ],
    pages: {
        signIn: '/auth/signin',
    }
});
