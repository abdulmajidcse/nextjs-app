import Head from 'next/head';

export default function Meta({
    title = process.env.APP_NAME,
    description = 'I am a Web Expert. I love to learn and share my knowledge about programming. I am currently working with Laravel and ReactJS. And also learnig NextJs. In this app, I have created a todo list.',
}) {
    return (
        <>
            <Head>
                <title>
                    {title} - {process.env.APP_NAME}
                </title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}
