import { model, models } from 'mongoose';
import { createCooldownSchema } from '@/util';
import type { CooldownType } from 'demdevvyshared/freeforums';
const VoteCooldown = models.CoolDown || model<CooldownType>('VoteCooldown', createCooldownSchema(1 * 60));

export default VoteCooldown;