import * as React from 'react';
import { Title, Label, Icon } from 'Component';
import { I, translate, UtilCommon } from 'Lib';
import Head from '../../head';

class PopupSettingsPageImportNotionHelp extends React.Component<I.PopupSettings> {

	render () {
		return (
			<div>
				<Head {...this.props} returnTo="importNotion" name={translate('commonBack')} />
				<Icon className="logo" />
				<Title text={translate('')} />
				
				<Label className="step" text={UtilCommon.sprintf(translate('popupPageSettingsImportNotionHelpStep'), 1)} />
				<ol className="list">
					<li>
						{translate('popupPageSettingsImportNotionHelpStep11')}
						<img src="./img/help/notion/1-1.png" />
					</li>
					<li>
						{translate('popupPageSettingsImportNotionHelpStep12')}
						<img src="./img/help/notion/1-2.png" />
					</li>
					<li>
						{translate('popupPageSettingsImportNotionHelpStep13')}
						<img src="./img/help/notion/1-3.png" />
					</li>
					<li>
						{translate('popupPageSettingsImportNotionHelpStep14')}
						<img src="./img/help/notion/1-4.png" />
					</li>
					<li>
						{translate('popupPageSettingsImportNotionHelpStep15')}
						<img src="./img/help/notion/1-5.png" />
					</li>
				</ol>

				<Label className="step" text={UtilCommon.sprintf(translate('popupPageSettingsImportNotionHelpStep'), 2)} />
				<ol className="list">
					<li>
						{translate('popupPageSettingsImportNotionHelpStep21')}
						<img src="./img/help/notion/2-1.png" />
					</li>
					<li>
						{translate('popupPageSettingsImportNotionHelpStep22')}
						<img src="./img/help/notion/2-2.png" />
					</li>
				</ol>
			</div>
		);
	};

	componentWillUnmount (): void {
		const { getId } = this.props;
		const obj = $(`#${getId()}-innerWrap`);

		obj.css({ width: '', height: '' }).removeClass('scroll');
	};

	resize () {
		const { getId } = this.props;
		const obj = $(`#${getId()}-innerWrap`);
		const { ww, wh } = UtilCommon.getWindowDimensions();
		const width = Math.min(888, ww - 32);

		obj.css({ width, height: wh - 96 }).addClass('scroll');
	};

};

export default PopupSettingsPageImportNotionHelp;
