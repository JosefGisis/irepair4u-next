"use client"

export default function JotFormComp() {
	const jotFormCode = `
		<script
				type="text/javascript"
				src="https://form.jotform.com/jsform/233326023647048">
		</script>
		`
	return <div dangerouslySetInnerHTML={{ __html: jotFormCode }} />
}
