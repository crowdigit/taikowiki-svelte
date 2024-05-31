import { SongRequestController } from '$lib/module/common/song/song.server.js';
import type { SongData } from '$lib/module/common/song/types.js';
import { error } from '@sveltejs/kit';

export async function POST({ request, locals }) {
    if (!locals.user || !locals.userBasicData || !locals.userData) throw error(403);

    const data = await request.json();
    const songData = data.songData as SongData;
    const songNo = data.songNo as string;
    if (!songData || !songNo) throw error(400);

    Object.values(songData.courses).forEach(course => {
        if (course === null) return;
        course.images = course.images.filter(e => e !== '');
    })

    await SongRequestController.createRequest({
        UUID: locals.userData.UUID,
        songNo,
        data: songData
    })

    return new Response();
}