export const Schema = z.object({
  系统: z.object({
    当前时间: z.string().prefault('开学日'),
    当前场景: z.string().prefault('教室'),
    当前显示女主: z.string().prefault(''),
  }).prefault({}),
  在场女主: z.record(z.string().describe('女主姓名'), z.object({
    当前服装: z.string().prefault(''),
    内心话: z.string().prefault(''),
    内衣状态: z.string().prefault(''),
    小穴状态: z.string().prefault(''),
    袜子与鞋: z.string().prefault(''),
  }).prefault({})).prefault({}),
});
export type Schema = z.output<typeof Schema>;
