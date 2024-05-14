/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';
import {
	BlockControls,
	PlainText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	Disabled,
	ToolbarGroup,
	VisuallyHidden,
} from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import Preview from './preview';

export default function HTMLEdit( { attributes, setAttributes, isSelected } ) {
	const [ isPreview, setIsPreview ] = useState();
	const isDisabled = useContext( Disabled.Context );

	const instanceId = useInstanceId( HTMLEdit, 'html-edit-desc' );

	function switchToPreview() {
		setIsPreview( true );
	}

	function switchToHTML() {
		setIsPreview( false );
	}

	const blockProps = useBlockProps( {
		className: 'block-library-html__edit',
		'aria-describedby': isPreview ? instanceId : undefined,
	} );
	
	if (attributes.preview){
		return(
			<Fragment>
				<img className="tm-preview-cover" src={ attributes.url + 'style/images-p/textomap.jpg'}/>
			</Fragment>
		);
	}
	
	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ ! isPreview }
						onClick={ switchToHTML }
					>
						HTML
					</ToolbarButton>
					<ToolbarButton
						disabled = { attributes.content == '' ||   attributes.content == null}
						className="components-tab-button"
						isPressed={ isPreview }
						onClick={ switchToPreview }
					>
						{ __( 'Map' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			{ isPreview || isDisabled ? (
				<>
					<div>
					<Preview
						content={ attributes.content }
						isSelected={ isSelected }
					/>
					</div>
					<VisuallyHidden id={ instanceId }>
						{ __(
							'HTML preview is not yet fully accessible. Please switch screen reader to virtualized mode to navigate the below iFrame.'
						) }
					</VisuallyHidden>
				</>
			) : (
				<>
				<div className="tm-block-editor-plain-text-wrapper">
				<PlainText className="tm-block-editor-plain-text"
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Paste the embed code of the map...' ) }
					aria-label={ __( 'HTML' ) }
				/>
				<a href={ attributes.url + 'help-center/wordpress/'} class="tm-link" target="_blank">
					{ __( '☝️ Need support embedding your maps? visit our ')} <u>{ __( 'Help Center')}</u> 
				</a>
				</div>
				</>
			) }
		</div>
	);
}