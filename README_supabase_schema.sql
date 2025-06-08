
-- 点赞功能表（每人只能给每个视频点一次赞）
create table video_likes (
  id uuid primary key default uuid_generate_v4(),
  video_id uuid references videos(id),
  user_id uuid references auth.users(id),
  created_at timestamp with time zone default now(),
  unique(video_id, user_id)
);

-- 视频播放量统计（记录每次播放，或只加总数）
alter table videos add column views integer default 0;
