"use server"

import { put } from "@vercel/blob"
import fs from "fs"
import path from "path"

// import type { PutBlobResult } from "@vercel/blob"

// This file was only used to upload the logo to the blob storage on Vercel, but it can be used dynamically to upload any file to the blob storage.

/**
 * Uploads a file to the blob storage "logo" associated with the project on Vercel.
 * @param {string} filePath - absolute path to the file
 * @param {string} fileName - name of the file
 * @returns {Promise<PutBlobResult>} - the result of the put operation
 */
export default async function uploadBlob(filePath: string, fileName: string) {
	const absolutePath = path.join(
		__dirname,
		"..",
		"..",
		"..",
		"..",
		"..",
		filePath,
		fileName
	)
	const fileContent = fs.readFileSync(absolutePath)

	return await put(`irepair4u/${fileName}`, fileContent, {
		access: "public",
		contentType: "svg",
	})
}
