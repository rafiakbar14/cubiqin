import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://cubiqin.com'

    // Fetch all posts for dynamic routes from WordPress VPS
    let postEntries: any[] = [];
    try {
        const posts = await getAllPosts();
        postEntries = posts?.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly',
            priority: 0.7,
        })) || [];
    } catch (error) {
        console.error('Sitemap fetch failed:', error);
    }

    const staticPages = [
        '',
        '/about',
        '/portfolio',
        '/contact',
        '/blog',
        '/services/website',
        '/services/android',
        '/services/digital-marketing',
        '/services/social-media',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return [...staticPages, ...postEntries] as MetadataRoute.Sitemap;
}
