import { model, models } from 'mongoose';
import { createCooldownSchema } from '@/util';
import type { CooldownType } from '../../../demdevvyshared/src/freeforums';

const PostCooldown = models.PostCooldown || model<CooldownType>('PostCooldown', createCooldownSchema(5 * 60));

export default PostCooldown;