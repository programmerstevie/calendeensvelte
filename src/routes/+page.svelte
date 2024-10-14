<script>
	import { onMount } from 'svelte';

	import TagSEO from '../lib/components/TagSEO.svelte';
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import Pricing from '../lib/components/Pricing.svelte';
	import Footer from '../lib/components/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		console.log(data.post);
	});
</script>

<TagSEO canonicalSlug="" />
<!-- <TagSchema /> -->
<main>
	<Header></Header>
	<Hero></Hero>
	<Pricing></Pricing>
	<Footer></Footer>
</main>
