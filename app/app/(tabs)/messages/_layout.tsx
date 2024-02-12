import React from "react";
import { createLayout } from "~/app/utils";

const Layout = createLayout()

export default function MessagesLayout() {
    return (
        <Layout>
            <Layout.Screen name="index" options={{
                headerTitle: 'Messages'
            }} />
        </Layout>
    )
}
