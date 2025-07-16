import dayjsLib from "dayjs";
import 'dayjs/locale/pt-br';
import reltiveTime from "dayjs/plugin/relativeTime";

dayjsLib.locale('pt-br');
dayjsLib.extend(reltiveTime);

export const dayjs = dayjsLib;