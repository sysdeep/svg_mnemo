import { BlueGray, Yellow } from "../../../nui/lib/palette";
import PC from "../pc/PC";

type Props = {
  x: number;
  y: number;
  hb_state: boolean; // тек. состояние пульсации
};

export default function Server({ x, y, hb_state }: Props) {
  return (
    <g>
      {/* body */}
      <PC x={x} y={y} body_color={BlueGray.p600} />

      {/* hearth beat */}
      <circle cx={x + 42} cy={y + 35} r={3} fill={hb_state ? Yellow.p300 : Yellow.p600} />

      {/* TODO: rx */}
      {/* TODO: tx */}
      {/* TODO: connection */}
      {/* TODO: отображение названия */}
      <text x={x + 4} y={y + 4 + 10} fontSize={12} fill="black">
        name
      </text>
      {/* TODO: время пинга */}
      <text x={x + 4} y={y + 4 + 20} fontSize={10} fill="black">
        10 ms
      </text>
    </g>
  );
}

/*
__font = QFont("Roboto mono", 7)
		
		#--- отображение названия
		self.__text_name = QGraphicsSimpleTextItem()
		self.__text_name.setParentItem(self.__body)
		self.__text_name.setFont(__font)
		self.__text_name.setPos(6, 5)
		
		#--- время пинга
		self.__text_ping = QGraphicsSimpleTextItem()
		self.__text_ping.setParentItem(self.__body)
		self.__text_ping.setPos(6, 15)
		self.__text_ping.setFont(__font)
*/

/*

		
	def set_name(self, text: str):
		"""название устройства"""
		r = text[0:6] if len(text) > 6 else text
		self.__text_name.setText(r)
	
	def set_description(self, text: str):
		"""описание устройства"""
		self.setToolTip(text)
*/
