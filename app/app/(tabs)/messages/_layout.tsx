import React from "react";
import { createLayout } from "~/app/utils";

const { Layout, Screen } = createLayout({
    title: 'Messages'
})

export default function MessagesLayout() {
    return (
        <Layout>
            <Screen name="[id]" title="Conversation" />
        </Layout>
    )
}
