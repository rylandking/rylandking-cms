const previewSecret = 'Ifuckinglovesanity69!'; // Copy the string you used for SANITY_PREVIEW_SECRET in env.local
const projectUrl = 'http://rylandking.com';
const sanityClient = require('@sanity/client');

export default function resolveProductionUrl(document) {
	return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
