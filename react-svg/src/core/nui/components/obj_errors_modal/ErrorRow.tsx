import { Gray } from "../../lib/palette";
import { ErrorModel } from "./ErrorModel";
import { ERROR_COLOR } from "./modal_data";
import TextLink from "./TextLink";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  error: ErrorModel;
  onConfirm: (err_no: number) => void;
};

export default function ErrorRow({ x, y, error, width, height, onConfirm }: Props) {
  // #--- actions
  // 	self.__actions = (
  // 		ActionLink("справка", action_cb=self.__show_error_help_action, parent=self, tooltip="Отобразить справку"),		#--- help button
  // 		ActionLinkSeparator("|", parent=self),
  // 		ActionLink("подтвердить", action_cb=self.__close_button_action, parent=self, tooltip="Подтвердить ошибку"),		#--- apply button
  // 	)

  // self.setToolTip("[{}] - {}".format(self.value, self.name));

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={ERROR_COLOR} />
      <text x={x + 4} y={y + 16 + (height - 16) / 2} fontSize={16} fill={Gray.p600}>
        {error.text}
      </text>

      {/* links */}
      <TextLink
        x={x + width - 90}
        y={y + height - 6}
        onClick={() => onConfirm(error.err_no)}
        text="подтвердить"
        description="Подтвердить ошибку"
      />
      <title>{`[${error.err_no}] - ${error.err_name}`}</title>
    </g>
  );
}
