import { GetServerSideProps, GetServerSidePropsContext, GetStaticPathsResult } from "next"
import { parseCookies } from "nookies"

export function withSSRAuth(fn: GetServerSideProps): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext) => {
        const cookies = parseCookies(ctx)

        if (!cookies['nextauth.token']) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }

        return await fn(ctx)
    }
}