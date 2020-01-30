/* eslint-disable global-require */
export const Icon = (icon) => {
  switch (icon) {
    case 'icon_outlined_nat_ic_menu':
      return require('./icon_outlined_nat_ic_menu.png');
    case 'icon_outlined_nat_ic_right':
      return require('./icon_outlined_nat_ic_right.png');
    case 'icon_outlined_nat_ic_exit':
      return require('./icon_outlined_nat_ic_exit.png');
    case 'icon_outlined_nat_ic_add_document':
      return require('./icon_outlined_nat_ic_add_document.png');
    case 'icon_outlined_nat_ic_copy':
      return require('./icon_outlined_nat_ic_copy.png');
    case 'icon_outlined_nat_ic_channel':
      return require('./icon_outlined_nat_ic_channel.png');
    case 'icon_outlined_nat_ic_restaurant':
      return require('./icon_outlined_nat_ic_restaurant.png');
    case 'icon_outlined_nat_ic_money_paper':
      return require('./icon_outlined_nat_ic_money_paper.png');
    case 'icon_outlined_nat_ic_health':
      return require('./icon_outlined_nat_ic_health.png');
    case 'icon_outlined_nat_ic_bus':
      return require('./icon_outlined_nat_ic_bus.png');
    case 'icon_outlined_nat_ic_home':
      return require('./icon_outlined_nat_ic_home.png');
    case 'icon_outlined_nat_ic_store':
      return require('./icon_outlined_nat_ic_store.png');
    case 'icon_outlined_nat_ic_mic_rec':
      return require('./icon_outlined_nat_ic_mic_rec.png');
    case 'icon_outlined_nat_ic_nat_ic_chat':
      return require('./icon_outlined_nat_ic_nat_ic_chat.png');
    case 'icon_outlined_nat_ic_occurrence':
      return require('./icon_outlined_nat_ic_occurrence.png');
    case 'icon_outlined_nat_ic_speaker':
      return require('./icon_outlined_nat_ic_speaker.png');
    case 'icon_outlined_nat_ic_lock':
      return require('./icon_outlined_nat_ic_lock.png');
    case 'icon_outlined_nat_ic_wifi':
      return require('./icon_outlined_nat_ic_wifi.png');
    case 'icon_outlined_nat_ic_waze':
      return require('./icon_outlined_nat_ic_waze.png');
    default:
      return null;
  }
};
