import React from "react";
import { createLayout } from "~/app/utils";

const Layout = createLayout()

export default function MessagesLayout() {
    return (
        <Layout>
            <Layout.Screen name="index" options={{
                title: 'Messages'
            }} />
            <Layout.Screen name="[id]" options={{
                title: 'Conversation'
            }} />
        </Layout>
    )
}
