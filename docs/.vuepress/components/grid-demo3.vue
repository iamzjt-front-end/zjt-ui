<template>
  <div class="container">
    <z-row gutter="20">
      <z-col span="6">
        <div class="innerDiv">间隔 20px</div>
      </z-col>
      <z-col span="18">
        <div class="innerDiv">间隔 20px</div>
      </z-col>
    </z-row>
    <z-row>
      <z-col span="2">1</z-col>
      <z-col span="21" offset="1">21</z-col>
    </z-row>
  </div>
</template>

<script>
import ZRow from '../../../src/z-row'
import ZCol from '../../../src/z-col'

export default {
  components: {
    'z-row': ZRow,
    'z-col': ZCol,
  }
}
</script>

<style lang="scss" scoped>
$bgc1: #99A9BF;
$bgc2: 	#D3DCE6;
$border-radius: 4px;
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;

  .z-row {
    margin-bottom: 10px;

    &:first-child {
      flex-wrap: nowrap;

      .z-col {
        background-color: #fff;

        .innerDiv {
          background-color: $bgc1;
          border-bottom-left-radius: $border-radius;
          border-top-left-radius: $border-radius;
        }

        &:last-child {
          .innerDiv {
            background-color: $bgc2;
            border-radius: 0 $border-radius $border-radius 0;
          }
        }
      }
    }
  }

  .z-col {
    min-height: 36px;
    text-align: center;
    line-height: 36px;

    &:nth-child(odd) {
      background-color: $bgc1;
    }

    &:nth-child(even) {
      background-color: $bgc2;
    }

    &:first-child {
      border-bottom-left-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }

    &:last-child {
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
}
</style>
