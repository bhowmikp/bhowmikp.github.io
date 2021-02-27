import Head from 'next/head'

const AppLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <>
            <Head>
                <title>Prantar Bhowmik - {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}
        </>
    )
}

export default AppLayout;
