import { GetServerSideProps } from "next";
import Router from "next/router";
import { destroyCookie } from "nookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: React.FC = () => {
    const {user} = useContext(AuthContext)

    useEffect(() => {
        api.get("/me")
        .then(response => console.log(response))
        .catch((err) => console.log(err))
    }, [])

    return <h1>Dashboard: {user?.email}</h1>;
}

export default Dashboard;

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx)
    const response = await apiClient.get('/me')

    console.log(response.data)

    return {
        props: {}
    }
})