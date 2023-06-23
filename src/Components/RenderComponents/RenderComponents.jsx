/* eslint-disable react/jsx-no-useless-fragment */
import {
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Tooltip,
  Button,
  Typography,
  IconButton,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Chip,
  Box,
  OutlinedInput,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import { COMPONENTS } from '../../Utils/Constants';
import { isArray } from '../../Utils/Utils';

const RenderComponents = ({ payload, metaData, ind, handleChange, deleteMltSlctOptn }) => {
  const {
    TEXT_FIELD,
    SELECT_BOX,
    CHECKBOX,
    RADIO,
    AUTOCOMPLETE,
    DATEPICKER,
    TEXT_AREA,
    MULTI_SELECT_BOX,
    BUTTON,
    TYPOGRAPHY,
    ICON,
    NONE
  } = COMPONENTS;

  const createComponent = () => {
    const {
      control,
      isPasswordField = false,
      variant,
      key,
      showLabel = false,
      label,
      placeholder,
      size,
      options,
      labelStyle,
      controlStyle,
      groupStyle,
      select = false,
      fullWidth = true,
      columnWidth = 1.5,
      inputFormat = 'dd-MM-yyyy',
      views = ['year', 'month', 'day'],
      defaultValue = '',
      maxRows = 10,
      minRows = 4,
      menuProps = {},
      type = 'text',
      btnTitle,
      handleClickButton,
      iconSize,
      isDisabled = false,
      isError = false,
      helperText = false,
      isRequired = false,
      handleBlur,
      endAdornmentData,
      endAdornmentIcon,
      isMultiline = false,
      textRows,
      tooltipTitle,
      placement,
      iconName,
      iconTitle = '',
      handleClickIcon,
      isSelecteAllAllow = true,
      isEmptyOptionAllowed = false,
      maxCharacterLimit,
      handleKeyDown,
      showTodayButton = true,
      disableFuture = false,
      disablePast = false,
      color,
      startIcon,
      minDate,
      maxDate,
      labelPlacement,
      autoCompleteDisplayKey,
      multiple = true,
      maxMultipleOptions = 100,
      selectAll = false,
      selectAllLabel = 'Select All',
      textTransform,
      payloadStyle,
      name,
      shouldDisableDate,
      displayKey = 'name',
      secondDate,
      secondLabel,
      isSecondDate = false
    } = metaData;

    switch (control) {
      case TEXT_FIELD:
      case SELECT_BOX:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            {showLabel && <FormLabel style={labelStyle}>[label]</FormLabel>}
            <Tooltip title={tooltipTitle || ''} placement={placement}>
              <TextField
                id={key}
                variant={variant || 'outlined'}
                size={size || 'small'}
                type={isPasswordField ? 'password' : type}
                select={select}
                fullWidth={fullWidth}
                label={(label && [label]) || ''}
                placeholder={(placeholder && [placeholder]) || ''}
                // SelectProps={{ native: true }}
                onChange={(e) => handleChange(key, e.target.value, ind)}
                onBlur={(e) => handleBlur && handleBlur(key, e.target.value, ind)}
                // onKeyDown={(e) => keyDownHandler(e)}
                value={(payload && payload[key]) || ''}
                style={{ ...controlStyle }}
                disabled={isDisabled}
                error={isError}
                helperText={isError && helperText}
                required={isRequired}
                autoComplete="off"
                // onInput={(e) => {
                //   e.target.value = getCharacters(e.target.value);
                // }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {endAdornmentData && <span style={{ fontSize: '0.8rem' }}>{endAdornmentData}</span>}
                      {endAdornmentIcon && <span>{endAdornmentIcon}</span>}
                    </InputAdornment>
                  )
                }}
                multiline={isMultiline}
                rows={textRows}
                // InputLabelProps={{ shrink: (payload && payload[key]) || false }}
              >
                {isEmptyOptionAllowed && <MenuItem key={key} value="" />}
                {isSelecteAllAllow && (
                  <MenuItem key={key} value="all">
                    --
                  </MenuItem>
                )}
                {isArray(options) &&
                  options.map((item) => (
                    <MenuItem style={{ fontSize: '0.8rem' }} key={item.id} disabled={item.isDisabled} value={item.id}>
                      {item[displayKey]}
                    </MenuItem>
                  ))}
              </TextField>
            </Tooltip>
          </Grid>
        );
      case MULTI_SELECT_BOX:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <FormControl style={{ width: '100%' }}>
              <InputLabel error={isError} style={labelStyle} id={`${key}-chip-label`} required={isRequired}>
                {(label && [label]) || ''}
              </InputLabel>
              <Select
                labelId={`${key}-chip-label`}
                id={`${key}-chip-id`}
                multiple={multiple}
                value={(payload && payload[key]) || []}
                onChange={(e) => handleChange(key, e.target.value, ind)}
                input={<OutlinedInput id={`${key}-select-chip-id`} label={[label]} />}
                error={isError}
                helperText={isError && helperText}
                required={isRequired}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(isArray(selected) && (
                      <>
                        {selected?.slice(0, maxMultipleOptions).map((item) => (
                          <Chip
                            key={item.name}
                            label={item.name}
                            onMouseDown={(e) => e.stopPropagation()}
                            onDelete={(e) => deleteMltSlctOptn(key, item.id, ind)}
                          />
                        ))}
                        {maxMultipleOptions < selected.length && (
                          <span style={{ marginTop: '0.5rem' }}>+{selected.length - maxMultipleOptions} more</span>
                        )}
                      </>
                    )) ||
                      (selected && (
                        <Chip
                          key={selected.name}
                          label={selected.name}
                          onMouseDown={(e) => e.stopPropagation()}
                          onDelete={(e) => deleteMltSlctOptn(key, selected.id, ind)}
                        />
                      )) || <></>}
                  </Box>
                )}
                MenuProps={menuProps}
                style={controlStyle}
                disabled={isDisabled}
              >
                {selectAll && (
                  <MenuItem
                    key={`${ind}-all`}
                    value={(payload[key] && options.length === payload[key].length && 'deselectAll') || 'selectAll'}
                    style={{ fontSize: '0.8rem' }}
                  >
                    {(payload[key] && options.length === payload[key].length && 'Deselect All') || 'Select All'}
                  </MenuItem>
                )}
                {options?.map((item, ind) => (
                  <MenuItem
                    key={`${item}-${ind}`}
                    value={item}
                    style={{ fontSize: '0.8rem', height: '2rem', fontStyle: item.isOnLeave ? 'italic' : '' }}
                  >
                    {(multiple && (
                      <FormControlLabel
                        label={item.name}
                        htmlFor={item.id}
                        labelPlacement="end"
                        control={
                          <Checkbox
                            inputid={item?.id}
                            checked={
                              (payload &&
                                isArray(payload[key]) &&
                                payload[key].map((item) => item?.id).includes(item?.id)) ||
                              false
                            }
                          />
                        }
                      />
                    )) ||
                      item.name}
                  </MenuItem>
                ))}
              </Select>
              {isError && <FormHelperText error>{helperText}</FormHelperText>}
            </FormControl>
          </Grid>
        );
      case TYPOGRAPHY:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <Grid style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Typography variant="subtitle2" style={{ ...labelStyle, fontSize: '1rem' }}>
                {label || ''}
              </Typography>
              {isRequired && (
                <Typography variant="subtitle2" color="error">
                  *
                </Typography>
              )}
            </Grid>
          </Grid>
        );
      case BUTTON:
        return (
          <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`}>
            <Tooltip title={tooltipTitle || ''}>
              <Button
                disabled={isDisabled}
                // fullWidth={fullWidth}
                size="small"
                variant="contained"
                name={name || ''}
                // sx={{
                //   borderRadius: 28,
                //   ':hover': {
                //     bgcolor: color === 'success' ? 'primary.main' : 'warning.main',
                //     color: 'white'
                //   },
                //   textTransform
                // }}
                onClick={handleClickButton}
                color={color}
                startIcon={startIcon}
                sx={{ textTransform: 'none' }}
              >
                {btnTitle}
              </Button>
            </Tooltip>
          </Grid>
        );
      case ICON:
        return (
          <>
            <Tooltip title={tooltipTitle || ''} placement={placement}>
              <IconButton
                onClick={() => handleClickIcon(key, ind)}
                aria-label={tooltipTitle || ''}
                style={{ ...groupStyle }}
                color={color || 'inherit'}
                disabled={isDisabled}
                size={iconSize}
              >
                {iconName} <Typography variant="subtitle2">{iconTitle}</Typography>
              </IconButton>
            </Tooltip>
            {label && <Typography variant="subtitle2">{label}</Typography>}
          </>
        );
      case NONE:
        return <Grid item xs={12} sm={columnWidth} style={{ ...groupStyle }} key={`${key}-${ind}`} />;
      default:
        return '';
    }
  };
  return createComponent();
};

export default RenderComponents;
