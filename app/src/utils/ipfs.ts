import { CarReader } from '@ipld/car'
import { importDAG } from '@ucanto/core/delegation'
import * as Signer from '@ucanto/principal/ed25519'
import * as Client from '@web3-storage/w3up-client'
import { StoreMemory } from '@web3-storage/w3up-client/stores'

type UploadFileType = 'application/json'

const principal = Signer.parse(process.env.KEY as string)
const store = new StoreMemory()


export const test = () => {
    console.log("XXXXX", principal)
}

// export const parseProof = async (data: any) => {
//     const blocks = []
//     const reader = await CarReader.fromBytes(Buffer.from(data, 'base64'))
//     for await (const block of reader.blocks()) {
//         blocks.push(block)
//     }
//     return importDAG(blocks)
// }


// const uploadData = async (data: any, type: UploadFileType) => {
//     const obj = data
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type })

//     return client.uploadFile(blob)
// }



// const client = await Client.create({ principal, store })
// // Add proof that this agent has been delegated capabilities on the space
// const proof = await parseProof(process.env.PROOF)
// const space = await client.addSpace(proof)
// await client.setCurrentSpace(space.did())

// // Upload file
// const data = { value: 'testar' }
// const upload = await uploadData(data, 'application/json')
// console.log(upload)
