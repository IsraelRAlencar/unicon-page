// app/actions.ts
'use server'

import { Resend } from 'resend';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const { name, email, phone, message } = formData;

    const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, ${name}! Recebemos sua solicitação de contato referente a consultoria, em que podemos ajudar?`)}`;

    try {
        await resend.emails.send({
            from: 'israelalencar@gecontrolsistemas.com.br',
            to: ['unicon@uniconcontabil.com.br', 'joaohenrique@uniconcontabil.com.br', 'contato@uniconcontabil.com.br', 'israelalencardev@gmail.com'],
            subject: `Nova Solicitação de Consultoria - ${name}`,
            replyTo: email,
            html: `
                <h1>Nova Solicitação de Consultoria para Unicon</h1>
                <p>Um novo lead preencheu o formulário no site.</p>
                <hr>
                <h2>Dados do Contato:</h2>
                <ul>
                    <li><strong>Nome:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Telefone/WhatsApp:</strong> ${phone}</li>
                </ul>
                <h2>Mensagem:</h2>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>
                    <a href="${whatsappLink}" style="background-color: #25D366; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
                        Iniciar conversa no WhatsApp
                    </a>
                </p>
            `
        });
        console.log('E-mail enviado com sucesso!');
        return { success: true, message: 'E-mail enviado com sucesso!' };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, message: 'Falha ao enviar o e-mail.' };
    }
}