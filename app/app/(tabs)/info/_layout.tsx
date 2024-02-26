import React from "react";
import { createLayout } from "~/app/utils";

const { Layout, Screen } = createLayout({
    title: 'Info'
})

export default function InfoLayout() {
    return (
        <Layout>
            <Screen name="test" title="TESAT" />
        </Layout>
    )
}
