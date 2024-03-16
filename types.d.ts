declare module 'types' {
	interface Pager {
		current_page: number
		prev_page_url: string | null
		next_page_url: string | null
		last_page: number
		links: { url: string | null; label: string; active: boolean }[]
		total: number
	}
}
