import { KoaAppContext } from 'src/type';
import { uploadTempFileForProfileImage } from 'src/app/upload/uploadSvc';
import { toArray } from 'src/util/commonUtil';

export async function uploadProfileImage(ctx: KoaAppContext) {
  const fileList = toArray(ctx.request.files?.file);
  return uploadTempFileForProfileImage(fileList, ctx.state.transaction!);
}
