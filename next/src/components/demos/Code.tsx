import { getHighlighter } from 'shiki/bundle/web';

const codeToHtml = async ({ code, language }: { code: string, language: string }) => {
    const highlighter = await getHighlighter({
        langs: ['js', 'py'],
        themes: ['github-light'],
    });
    return highlighter.codeToHtml(code, {
        lang: language,
        themes: {
            light: 'github-light',
            dark: 'github-light'
        }
    });
};
export default async function Code({ code, language }: { code: string, language: string }) {
    const html = await codeToHtml({ code, language });
    return (
        <div className="overflow-x-auto px-5 w-full flex justify-center text-[1.2vw] md:text-[0.725rem]" dangerouslySetInnerHTML={{ __html: html }} />
    );
}

